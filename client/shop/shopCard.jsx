import React from 'react';
import { Link } from 'react-router-dom'
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import East from "@mui/icons-material/East";
import DescriptionIcon from '@mui/icons-material/Description';
import { H3, Span } from "../components/Typography";
import FlexBetween from "../components/flex-between.jsx";
import FlexBox from "../components/flex-box.jsx";

// styles components
const ContentWrapper = styled("div", {
  shouldForwardProp: prop => prop !== "img"
})(({
  theme,
  img
}) => ({
  color: "white",
  backgroundSize: "cover",
  padding: "17px 30px 56px",
  backgroundPosition: "center",
  height: "125px",
  backgroundImage: `linear-gradient(to bottom,
    ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(theme.palette.grey[900], 0.8)}), 
    url(${img})`
}));

const ShopCard = props => {
  const {
    name,
    rating,
    description,
    owner,
    id
  } = props || {};
  return <Card>
    <ContentWrapper img={"/assets/images/store.png"}>
      <H3 fontWeight="600" mb={1}>
        {name}
      </H3>

      <Rating value={rating || 0} color="warn" size="small" readOnly sx={{
        mb: "0.75rem"
      }} />

      <FlexBox mb={1} gap={1}>
        <DescriptionIcon fontSize="small" sx={{
          fontSize: 17,
          mt: "3px"
        }} />
        <Span color="white">{description}</Span>
      </FlexBox>

      <FlexBox alignItems="center" gap={1}>
        <PersonIcon fontSize="small" sx={{
          fontSize: 17
        }} />
        <Span color="white">{owner}</Span>
      </FlexBox>
    </ContentWrapper>

    <FlexBetween pl={3} pr={1}>
      <Avatar alt={name} src={'/api/shops/logo/' + id + "?" + new Date().getTime()} sx={{
        width: 64,
        height: 64,
        mt: "-32px",
        border: "3px solid",
        borderColor: "grey.100"
      }} />

      <Link to={"/shops/" + id} >
        <IconButton sx={{
          my: 0.5
        }}>
          <East sx={{
            fontSize: 19,
            transform: ({
              direction
            }) => `rotate(${direction === "rtl" ? "180deg" : "0deg"})`
          }} />
        </IconButton>
      </Link>
    </FlexBetween>
  </Card>;
};

export default ShopCard;