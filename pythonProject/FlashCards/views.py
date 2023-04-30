from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import FlashcardsSerializer
from User.serializers import StatusSerializer
from .models import FlashCard
from User.models import User, UserSettings, Status
import datetime, math
from itertools import chain


@api_view(['GET'])
@permission_classes([AllowAny])
def apiOverview(request):
    apiUrls = {
    'List': '/All/',
    'Create': '/Create/',
    'Update': '/Update/<str:pk>/',
    "Learn": '/Learn/<str:pk>/',
    "Delete": '/Delete/<str:pk>/'
}
    return Response(apiUrls)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def flashcardsList(request):
    
    flashcards=  FlashCard.objects.filter(user=request.user.id)
    serializer = FlashcardsSerializer(flashcards, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createFlashcard(request):
    user = User.objects.filter(id = request.user.id).first()
    if(user):     
      serializer = FlashcardsSerializer(data=request.data, partial=True)
      if serializer.is_valid():
        serializer.save(user = user)
        return Response("Created", status="200")
    return Response(None, status="400")

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateFlashcard(request, pk):
    flashcard = FlashCard.objects.get(id=pk)
    if(flashcard):
        
      serializer = FlashcardsSerializer( instance=flashcard ,data=request.data, partial=True)
      if serializer.is_valid():
        serializer.save()
        return Response("Updated", status="200")
    return Response(None, status="400")

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteFlashcard(request, pk):
    flashcard = FlashCard.objects.get(id=pk)
    if(flashcard):
      flashcard.delete()
      return Response("Deleted", status="200")
    return Response(None, status="400")

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def checkAnswer(request, pk):
    flashcard = FlashCard.objects.get(id=pk)
    settings = UserSettings.objects.filter(user_id = request.user.id).first()
    if(flashcard & settings):
      if(flashcard.back_text ==  request.data.get('answer')):
         flashcard.correct_at_row += 1
         next_session_period = flashcard.correct_at_row * 3
         
         if(next_session_period >= settings.maximum_break):
          flashcard.next_session = datetime.date.today() + datetime.timedelta(days=settings.maximum_break)
         else:
            flashcard.next_session = datetime.date.today() + datetime.timedelta(days=next_session_period)

         serializer = FlashcardsSerializer( instance=flashcard ,data=request.data, partial=True)
         if serializer.is_valid():
            serializer.save()
            return Response(True, status="200")
      else:
         flashcard.correct_at_row = 0
         flashcard.next_session =  datetime.date.today() + datetime.timedelta(days=1)
         serializer = FlashcardsSerializer( instance=flashcard ,data=request.data, partial=True)
         if serializer.is_valid():
            serializer.save()
            return Response(False, status="200")

    return Response(None, status="400")

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFlashcardsToLearn(request):
    current_user = User.objects.filter(id = request.user.id).first()
    settings = UserSettings.objects.filter(user_id = request.user.id).first()
  
    if(current_user and settings):
       percent_new = math.ceil(((settings.percent_new * 0.1) / 100) * settings.daily_flashcards)
       new_flashcards = FlashCard.objects.filter(user=current_user, status='NEW')[:percent_new]
       remaining = settings.daily_flashcards -  new_flashcards.count()
       today = datetime.date.today()
       remaining_flashcards = FlashCard.objects.filter(user=current_user, status='LEARNED', next_session__lte=today)[:remaining]
       flashcards = list(chain(new_flashcards, remaining_flashcards))
       serializer = FlashcardsSerializer(flashcards, many=True)
       return Response(serializer.data, status="200")
    return Response(None, status="400")

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getStatus(request):
    current_user = User.objects.filter(id = request.user.id).first()
    status  =  Status()
    status.all_flashcards = FlashCard.objects.filter(user=current_user).count()
    status.new_flashcards = FlashCard.objects.filter(user=current_user, status="NEW").count()
    status.to_learn_flashcards = FlashCard.objects.filter(user=current_user, status="LEARNED").count()
    serializer = StatusSerializer(status)
    return Response(serializer.data)
    
    