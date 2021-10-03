import { db, auth } from '../firebase.config';

export const signin = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const documentData = await db.collection('users').doc(userCredential.user.uid).get();
        const data = documentData.data();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const signup = async (email, password, fname, lname, gender, phone, nid) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user.uid;
    const doc = db.collection('users').doc(uid);
    const data = {
        uid,
        email,
        fname,
        lname,
        gender,
        phone,
        nid,
        role: "user"
    };
    await doc.set(data);
    return data;
}

export const newBillboard = async (location, type, price, dimensions) => {
    const number = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const doc = db.collection('billboards').doc();
    const data = {
        id: doc.id,
        number,
        location,
        type,
        dimensions,
        price,
        status: "available"
    };
    await doc.set(data);
    return data;
}

export const getBillboard = async () => {
    const docs = await db.collection('billboards').get();
    return docs.docs.map(item => item.data());
}

export const deleteBillboard = (id) => {
    return db.collection('billboards').doc(id).delete();
}

export const updateBillboard = (id, data) => {
    return db.collection('billboards').doc(id).update(data);
}
export const getMyApplications = async (uid) => {
    const docs = await db.collection('applications').where("uid", "==", uid).get();
    return docs.docs.map(item => item.data());
}

export const getApplications = async () => {
    const docs = await db.collection('applications').get();
    return docs.docs.map(item => item.data());
}

export const getUsers = async () => {
    const docs = await db.collection('users').get();
    return docs.docs.map(item => item.data());
}