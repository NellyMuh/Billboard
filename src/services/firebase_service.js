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

export const signup = async (email, password, fname, lname, genger, phone, nid) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user.uid;
    const doc = db.collection('users').doc(uid);
    const data = {
        uid,
        email,
        fname,
        lname,
        genger,
        phone,
        nid,
        role: "user"
    };
    await doc.set(data);
    return data;
}

export const newBillboard = async (location, type, price, dimensions) => {
    const doc = db.collection('billboards').doc();
    const data = {
        id: doc.id,
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