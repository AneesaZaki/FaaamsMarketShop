import React from "react";
import { Link } from 'react-router-dom'
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { H5, Paragraph } from "../components/Typography";
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

const TableRow = styled(Card)(({
    theme
}) => ({
    gap: 16,
    marginBlock: 16,
    display: "grid",
    borderRadius: 10,
    cursor: "pointer",
    alignItems: "center",
    padding: ".6rem 1.2rem",
    gridTemplateColumns: "1.5fr 2fr 1.5fr auto",
    [theme.breakpoints.down("sm")]: {
        gap: 8,
        gridTemplateColumns: "repeat(2, 1fr)"
    }
}));

function currency(price, fraction = 2) {
    const formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: fraction
    }).format(price);
    return formatCurrency;
}

const format = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const OrderRow = ({
    order
}) => {
    const getColor = status => {
        switch (status) {
            case "Pending":
                return "info";

            case "Processing":
                return "secondary";

            case "Shipped":
                return "warning";

            case "Delivered":
                return "success";

            case "Cancelled":
                return "error";

            default:
                return "default";
        }
    };

    const getTotal = () => {
        return order.products.reduce((a, b) => {
            const quantity = b.status == "Cancelled" ? 0 : b.quantity;
            return a + quantity * b.product.price;
        }, 0);
    }

    return (
        <TableRow sx={{
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr"
        }}>
            <H5 ellipsis>#{order._id}</H5>

            <Box textAlign="center">
                <Chip size="small" label={order.status} color={getColor(order.status)} />
            </Box>

            <Paragraph textAlign={{
                sm: "center",
                xs: "left"
            }}>
                {format(order.created)}
            </Paragraph>

            <Paragraph textAlign="center">{currency(getTotal())}</Paragraph>

            <Box display={{
                sm: "inline-flex",
                xs: "none"
            }} justifyContent="end">
                <Link to={"/order/" + order._id}>
                    <IconButton>
                        <East fontSize="small" sx={{
                            color: "grey.500",
                            transform: ({
                                direction
                            }) => `rotate(${direction === "rtl" ? "180deg" : "0deg"})`
                        }} />
                    </IconButton>
                </Link>
            </Box>
        </TableRow>
    )
};

export default OrderRow;