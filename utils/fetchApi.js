import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a8c90f05e9mshf8e56c23c33e6fep15bfe6jsnffb35a2718a8',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
};