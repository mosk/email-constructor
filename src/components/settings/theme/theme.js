import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from '../item/item';
// import SettingsEmail from '../settings-email/settings-email';
import { Text as InputText } from '../../ui/input/text/text';
// import SettingsInputRange from '../settings-input-range/settings-input-range';
import { IncreaseDecreaseNumber as InputIncDecNumber } from '../../ui/input/increase-decrease-number/increase-decrease-number';

import { settingsActions } from '../../../services/actions/index';

export const Theme = () => {
  const dispatch = useDispatch();
  const [currentSettings, setCurrentSettings] = useState('global');
  const emailWidth = useSelector((state) => state.emailSettings.width);

  const emailTitleHandler = (value) => {
    dispatch(settingsActions.addTitle(value));
  };

  const emailPreheaderHandler = (value) => {
    dispatch(settingsActions.addPreheader(value));
  };

  const emailWidthHandler = (button) => {
    if (button.dataset.action === 'increment') {
      dispatch(settingsActions.incrementWidth());
    } else if (button.dataset.action === 'decrement') {
      dispatch(settingsActions.decrementWidth());
    }
  };

  return (
    <>
      <Item
        setCurrentSettings={setCurrentSettings}
        currentSettings={currentSettings}
        name="Общие настройки"
        value="global"
      >
        <InputText
          title="Тема письма"
          inputId="emailSettingsTitle"
          placeholder="Самое классное письмо!"
          onChange={emailTitleHandler}
        />
        <InputText
          title="Прехедер письма"
          inputId="emailSettingsPreheader"
          placeholder=""
          onChange={emailPreheaderHandler}
        />
        <InputIncDecNumber
          title="Ширина письма"
          inputId="emailSettingsWidth"
          onChange={emailWidthHandler}
          value={emailWidth}
        />
      </Item>
      <Item
        setCurrentSettings={setCurrentSettings}
        currentSettings={currentSettings}
        name="Текстовые блоки"
        value="texts"
      >
        Настройки текстовых блоков: заголовки, обычный текст и т.п.
      </Item>
      <Item
        setCurrentSettings={setCurrentSettings}
        currentSettings={currentSettings}
        name="Кнопки"
        value="buttons"
      >
        Настройки кнопок – основная, второстепенная и т.д.
      </Item>
      <Item
        setCurrentSettings={setCurrentSettings}
        currentSettings={currentSettings}
        name="Адаптивность"
        value="adaptive"
      >
        Настройки адаптивности – масштабируемое/адаптивное письмо (перенести в
        общие?)
      </Item>
    </>
  );
};
