import React from "react";
import GridItem from "../../Component/Grid/GridItem/GridItem";
import Card from "../../Component/Card/Card";
import CardContent from "../../Component/Card/CardContent/CardContent";
import Typography from "../../Component/Typography/Typography";
import CounterDisplay from "../../Component/CounterDisplay/CounterDisplay";

const CardInfo = ({ cardType, value }) => {
  return (
    <GridItem item xs={12} md={3}>
      <Card className={`card ${[cardType]}`}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            # of <span className={`${[cardType]}Color`}>{cardType}</span> cases
            : <CounterDisplay end={value} />
          </Typography>
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default CardInfo;
