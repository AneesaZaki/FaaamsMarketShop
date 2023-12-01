import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { H3, Span } from "../components/Typography";
import FlexBetween from "../components/flex-between.jsx";
import FlexBox from "../components/flex-box.jsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
    }
}))

const ShopBanner = props => {
    const {
        name,
        created,
        description,
        id,
        ownerId,
        ownerName
    } = props || {};

    const classes = useStyles();

    return <Card sx={{
        mb: 4,
        pb: 2.5
    }}>
        <Box height="202px" sx={{
            background: `url("/assets/images/store.png") center/cover`
        }} />

        <FlexBox mt={-8} px={3.75} flexWrap="wrap">
            <Avatar alt={name} src={'/api/shops/logo/' + id + "?" + new Date().getTime()} sx={{
                mr: "37px",
                width: "120px",
                height: "120px",
                border: "4px solid",
                borderColor: "grey.100"
            }} />

            <Box sx={{
                flex: "1 1 0",
                minWidth: "250px",
                "@media only screen and (max-width: 500px)": {
                    marginLeft: 0
                }
            }}>
                <FlexBetween flexWrap="wrap" mt={0.375} mb={3}>
                    <Box my={1} p="4px 16px" borderRadius="4px" display="inline-block" bgcolor="secondary.main">
                        <H3 fontWeight="600" color="grey.100">
                            {name}
                        </H3>
                    </Box>
                </FlexBetween>

                <FlexBetween flexWrap="wrap">
                    <div>
                        <FlexBox alignItems="center" gap={1} mb={2}>
                            <Rating color="warn" size="small" value={5} readOnly />
                        </FlexBox>

                        <FlexBox color="grey.600" gap={1} mb={1} maxWidth={270}>
                            <FavoriteIcon fontSize="small" sx={{
                                fontSize: 18,
                                mt: "3px"
                            }} />
                            <Span color="grey.600">{description}</Span>
                        </FlexBox>

                        <FlexBox color="grey.600" gap={1} mb={1}>
                            <CalendarMonthIcon fontSize="small" sx={{
                                fontSize: 18,
                                mt: "2px"
                            }} />
                            <Span color="grey.600">{created}</Span>
                        </FlexBox>

                        <Link to={"/user/" + ownerId} className={classes.link}>
                            <FlexBox color="grey.600" gap={1} mb={1}>
                                <PersonIcon fontSize="small" sx={{
                                    fontSize: 18,
                                    mt: "2px"
                                }} />
                                <Span color="grey.600">{ownerName}</Span>
                            </FlexBox>
                        </Link>

                    </div>

                </FlexBetween>
            </Box>
        </FlexBox>
    </Card>;
};

export default ShopBanner;