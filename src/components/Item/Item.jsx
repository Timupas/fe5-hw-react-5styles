import { CgAlarm, CgChart } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { Difficulty } from "../Difficulty/Difficulty";

import {
  List,
  Card,
  CardImage,
  Title,
  DetailsBox,
  InfoSpan,
} from "./Item.style";

export const Item = ({ menu }) => {
  return (
    <List>
      {menu.map(
        ({ title, time, servings, calories, difficulty, image }, index) => {
          return (
            <Card key={index} $difficulty={difficulty}>
              <CardImage src={image} alt={title} />
              <Title>{title}</Title>

              <DetailsBox>
                <InfoSpan>
                  <CgAlarm /> {time}
                </InfoSpan>
                <InfoSpan>
                  <CgChart /> {servings}
                </InfoSpan>
                <InfoSpan>
                  <SlEnergy /> {calories}
                </InfoSpan>
              </DetailsBox>

              <Difficulty level={difficulty} />
            </Card>
          );
        }
      )}
    </List>
  );
};