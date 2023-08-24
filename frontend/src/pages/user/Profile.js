// // ProfilePage.js
// import React, { useState } from 'react';
// import './Profile.css';
// import { RxAvatar } from 'react-icons/rx'
// import { Button } from '@mui/material';
// function Profile() {
//     const [profilePhoto, setProfilePhoto] = useState("")

//     const [editClicked, setEditClicked] = useState(false)
//     const handleEdit = () => setEditClicked(!editClicked)
//     const userName = localStorage.getItem('userName');
//     const email = localStorage.getItem('email');
//     const role = localStorage.getItem('role');
//     const mobile = localStorage.getItem('mobile');
//     return (
//         <div className="profile-container">
//             <div className="profile-info">
//                 <div className="profile-picture-container">
//                     {profilePhoto ? <img src="profile-photo.jpg" alt="Profile" className="profile-picture" />
//                         : <div >
//                             <RxAvatar size={70} />
//                         </div>}
//                 </div>
//                 <div className="user-details">
//                     <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                         <h2>User Name:</h2>
//                         <div className="detail-value">{userName}</div>
//                     </div>
//                     <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                         <h2>Email:</h2>
//                         <div className="detail-value">{email}</div>
//                     </div>
//                     <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//                         <h2>Mobile:</h2>
//                         <div className="detail-value">{mobile}</div>
//                     </div>
//                     <div className={editClicked ? 'button-css-clicked' : 'button-css-unclicked'}>
//                         <Button variant='contained' onClick={() => handleEdit()}>Edit</Button>
//                         {editClicked && <Button variant='contained'>cancel</Button>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;
// ProfilePage.js
import React, { useState } from 'react';
import './Profile.css';
import { RxAvatar } from 'react-icons/rx'
import { Button } from '@mui/material';
import { updateUserdetails } from './service';

function Profile() {
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const [profilePhoto, setProfilePhoto] = useState('');
    const [editClicked, setEditClicked] = useState(false);
    //     const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    const mobile = localStorage.getItem('mobile');
    const handleEdit = () => {
        setEditClicked(!editClicked)
    };

    const handleProfilePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setProfilePhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleSave = () => {
        updateUserdetails(userName).then((response) => {
            console.log(response)
            if (response?.data?.modifiedCount === 1) {
                localStorage.setItem('userName', userName)
                setEditClicked(!editClicked)
            }
        }).catch((error) => {
            console.log(error)
        })
        setEditClicked(!editClicked)
    }
    const renderProfilePhoto = () => {
        if (profilePhoto) {
            return <img src={profilePhoto} alt="Profile" className="profile-picture" />;
        } else {
            return (
                <div>
                    <RxAvatar size={70} />
                </div>
            );
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-info">
                <div className="profile-picture-container">
                    {renderProfilePhoto()}
                    {/* {editClicked && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoChange}
                            className="profile-photo-input"
                        />
                    )} */}
                </div>
                <div className="user-details">
                    <div className='user-details-row'>
                        <h2 style={{ color: 'linen' }}>User Name:</h2>
                        {editClicked ? (
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        ) : (
                            <div className="detail-value">{userName}</div>
                        )}
                    </div>
                    <div className='user-details-row'>
                        <h2 style={{ color: 'linen' }}>Email:</h2>
                        <div className="detail-value">{email}</div>
                    </div>
                    <div className='user-details-row'>
                        <h2 style={{ color: 'linen' }}>Mobile:</h2>
                        <div className="detail-value">{mobile}</div>
                    </div>
                </div>
                <div className={editClicked ? 'button-css-clicked' : 'button-css-unclicked'}>
                    {!editClicked && <Button variant='contained' onClick={() => handleEdit()}>
                        Edit
                    </Button>}
                    {
                        editClicked &&
                        <div> <Button variant='contained' style={{ marginRight: '10px' }} onClick={() => handleSave()}>
                            Save
                        </Button>
                            <Button variant='contained' onClick={() => handleEdit()}>
                                Cancel
                            </Button></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
