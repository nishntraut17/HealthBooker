import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({ setModelOpen, ele }) => {
    const [formDetails, setFormDetails] = useState({
        date: "",
        time: "",
    });

    const inputChange = (e) => {
        const { name, value } = e.target;
        return setFormDetails({
            ...formDetails,
            [name]: value,
        });
    };

    const bookAppointment = async (e) => {
        e.preventDefault();
        try {
            const { data } = await toast.promise()
        }
    }
}