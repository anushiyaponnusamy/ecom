
import React, { useEffect, useState } from 'react';
import './Profile.css';
import { RxAvatar } from 'react-icons/rx'
import { Button } from '@mui/material';
import { getUserdetails, updateUserdetails } from './service';

function Profile() {
    const [userDetails, setUserDetails] = useState({
        userName: '',
        email: '',
        profilePhoto: '',
        mobile: ''
    });
    const [editClicked, setEditClicked] = useState(false);

    const userId = localStorage.getItem('userId');
    const handleEdit = () => {
        setEditClicked(!editClicked)
    };

    const handleSave = () => {
        updateUserdetails(userDetails?.userName).then((response) => {
            if (response?.data?.modifiedCount === 1) {
                localStorage.setItem('userName', userDetails?.userName)
                setEditClicked(!editClicked)
            }
        }).catch((error) => {
            console.log(error)
        })
        setEditClicked(!editClicked)
    }
    const renderProfilePhoto = () => {
        if (userDetails?.profilePhoto) {
            return <img src={userDetails?.profilePhoto} alt="Profile" className="profile-picture" />;
        } else {
            return (
                <div>
                    <RxAvatar size={70} />
                </div>
            );
        }
    };
    const handleChangeName = (name) => {
        setUserDetails({ ...userDetails, userName: name })
    }
    useEffect(() => {
        getUserdetails(userId).then((response) => {
            if (response.data) {
                setUserDetails({ userName: response.data.userName, email: response.data.email, mobile: response.data.mobile })
            }
        })
    }, [])
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
                        <div className="label"> <h2 style={{ color: '#837b73' }}>User Name</h2></div>
                        {editClicked ? (
                            <div>   : <input
                                type="text"
                                value={userDetails?.userName}
                                onChange={(e) => handleChangeName(e.target.value)}
                            /></div>
                        ) : (
                            <div className="detail-value">:    {userDetails?.userName}</div>
                        )}
                    </div>
                    <div className='user-details-row'>
                        <div className="label">  <h2 style={{ color: '#837b73' }}>Email</h2>  </div>
                        <div className="detail-value">:    {userDetails?.email}</div>
                    </div>
                    <div className='user-details-row'>
                        <div className="label">  <h2 style={{ color: '#837b73' }}>Mobile</h2>  </div>
                        <div className="detail-value">:    {userDetails?.mobile}</div>
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
