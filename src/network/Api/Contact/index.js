import { makePostRequest, makeGetRequest } from '../../BaseApi';

export const PostContact = async (firstName, lastName, age, photo) => {
    const url = 'contact';
    const body = { firstName, lastName, age, photo };

    console.log(body)
   

    const data = await makePostRequest(body, url);
    return data;
};

export const GetContact = async () => {
    const url = 'contact';
    const data = await makeGetRequest(url);
    return data;
};

export const DeleteContact = async (id) => {
    const url = `contact${id}`;
    const data = await makeGetRequest(url);
    return data;
};

export const EditContact = async (id, firstName, lastName, age, photo) => {
    const url = `contact${id}`;
    const body = { firstName, lastName, age, photo };
    const data = await makePostRequest(body, url);
    return data;
};
