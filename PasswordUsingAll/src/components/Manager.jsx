import React, { use } from 'react'
import { useRef, useState, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import { fetchPasswords } from '../redux/slice/PassSlice'


const Manager = () => {
    const dispatch = useDispatch()
    const { passwords, loading, error } = useSelector(state => state.passwords)
    const [editId, setEditId] = useState('');
    const [refresh, setRefresh] = useState(false);
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const getpasswords = useCallback(async () => {
        await dispatch(fetchPasswords())
        await setPasswordArray(passwords)

        console.log(passwords)
    }, [])
    useEffect(() => {
        dispatch(fetchPasswords());
    }, [dispatch]);

    useEffect(() => {
        setPasswordArray(passwords);
    }, [passwords]);
    useLayoutEffect(() => {
        getpasswords()
    }, [])

    useEffect(() => {
        if (refresh) {
            getpasswords();
            setRefresh(false);
            console.log("Passwords refreshed");
        }
    }, [refresh]);


    const copyText = useCallback((text) => {
        toast('Copied to clipboard!', { theme: 'dark' });
        navigator.clipboard.writeText(text);
    }, []);

    const sortedPasswords = useMemo(() => {
        return [...passwordArray].sort((a, b) => a.site.localeCompare(b.site));
    }, [passwordArray]);



    const showPassword = () => {
        if (ref.current.src.includes("https://cdn.hugeicons.com/icons/monocle-01-stroke-rounded.svg")) {
            passwordRef.current.type = "password"
            ref.current.src = "https://cdn.hugeicons.com/icons/view-off-slash-stroke-rounded.svg"
        }
        else if (ref.current.src.includes("https://cdn.hugeicons.com/icons/view-off-slash-stroke-rounded.svg")) {
            passwordRef.current.type = "text"
            ref.current.src = "https://cdn.hugeicons.com/icons/monocle-01-stroke-rounded.svg"

        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            try {
                if (editId) {
                    await axios.patch(`http://localhost:3000/${editId}`, form);
                    toast('Password updated!');
                    setEditId(null);
                   dispatch(fetchPasswords());
                    setform({ site: "", username: "", password: "" });
                } else {
                    await axios.post("http://localhost:3000/", form);
                    setPasswordArray([...passwordArray, { ...form }]);
                    setform({ site: "", username: "", password: "" });
                    toast('Password saved!');
                     dispatch(fetchPasswords());
                }
            } catch (err) {
                toast('Error saving password');
                console.error(err);
            }
        } else {
            toast('Error: Password not saved!');
        }
    };
    const deletePassword = async (_id) => {
        const confirmDelete = confirm("Do you really want to delete this password?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/${_id}`);
                setPasswordArray(passwordArray.filter(item => item._id !== _id));
                toast('Password Deleted!');
            } catch (error) {
                toast('Failed to delete password');
                console.error(error);
            }
        }
    };

    const editPassword = (_id) => {
        const itemToEdit = passwordArray.find(item => item._id === _id);
        if (itemToEdit) {
            setform({ site: itemToEdit.site, username: itemToEdit.username, password: itemToEdit.password });
            setEditId(_id);
        }
    };





    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        ref.current.src = "https://cdn.hugeicons.com/icons/view-off-slash-stroke-rounded.svg"
    }



    return (
        <>
            <button className='p-2 bg-green-300 border border-x-4 rounded-b-2xl cursor-pointer rounded-br-full rounded-e-lg rounded-l-full  font-bold text-shadow-red-300 text-shadow-2xs' onClick={() => setRefresh(true)}>refresh</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            <div className=" p-3 md:mycontainer min-h-[88.2vh] ">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">

                            <input type="password" ref={passwordRef} value={form.password} name='password' onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 p-4 py-1 w-full' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}  >
                                <img ref={ref} src="https://cdn.hugeicons.com/icons/view-off-slash-stroke-rounded.svg" alt="" width={30} />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        Save</button>
                </div>

                <div className="passwords w-full overflow-x-scroll hide-scrollbar">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.length != 0 && sortedPasswords.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center '>
                                            <span>{"*".repeat(item.password?.length || 0)}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='justify-center py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item._id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item._id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>

                            })}
                        </tbody>
                    </table>}
                </div>
            </div>

        </>
    )
}

export default Manager