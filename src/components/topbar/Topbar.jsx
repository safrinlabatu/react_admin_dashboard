import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Safadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="https://images.unsplash.com/photo-1563987219716-dac41f2d0b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
};
