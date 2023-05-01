import SettingsForm from '../SettingsForm/SettingsForm';
import { SettingsSectionWrapper, StyledPerson } from './SettingsSection.styles';

const SettingsSection = () => {
  return (
    <SettingsSectionWrapper>
      <SettingsForm />
      <StyledPerson />
    </SettingsSectionWrapper>
  );
};

export default SettingsSection;

