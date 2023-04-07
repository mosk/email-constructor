import { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';

import Item from "../item/item";
import Structures from "./structures/structures";
import Blocks from "./blocks/blocks";

export const Content = () => {
  const [currentSettings, setCurrentSettings] = useState("");

  return (
    <>
      <Item setCurrentSettings={setCurrentSettings} currentSettings={currentSettings} name="Структуры" value="content">
        <Structures />
      </Item>
      <Item setCurrentSettings={setCurrentSettings} currentSettings={currentSettings} name="Блоки" value="blocks">
        <Blocks />
      </Item>
      <Item setCurrentSettings={setCurrentSettings} currentSettings={currentSettings} name="Модули" value="modules">
        Здесь будут модули – готовые блоки, например, таймер, шапка, подвал и т.п.
      </Item>
    </>
  );
};
