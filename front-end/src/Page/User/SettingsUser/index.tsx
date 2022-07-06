import * as C from './styles'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import AsideNavLinks from '../../../Components/AsideNavLinks'


export default function SettingsUser() {

  const userLogin = useSelector((state: any) => state.userLogin)
  const { userInfo } = userLogin

  const [tabIndex, setTabIndex] = useState<number>(0)

  //TAB 1
  const nameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const currentPasswordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const newPasswordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const confirmNewPassowrdRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  const [handleAvatarImgPanel, setHandleAvatarImgPanel] = useState<boolean>(false)

  //TAB 2
  const [handleChangeVisibility, setHandleChangeVisibility] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {

    document.title = 'Settings'

    if (!userInfo) {

      navigate('/')

    }

  }, [navigate, userInfo])

  const setNewAvatarImg = (imgUrl: string) => {

  }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    //make submit

  }

  const handleEraseData = () => {

  }

  return (
    <C.Container tabIndex={tabIndex} handleAvatarImgPanel={handleAvatarImgPanel}>

      <AsideNavLinks />

      <div className='content'>

        <div className='menu-profile'>

          <ul>
            <li onClick={() => setTabIndex(0)}>User Profile</li>
            <li onClick={() => setTabIndex(1)}>User ID</li>
            <li onClick={() => setTabIndex(2)}>Bookmark Data</li>
          </ul>

        </div>

        {/*TAB INDEX 0 */}
        <div className='user-info' id='index-0'>

          {userInfo && (
            <h1>{userInfo.name}'s Profile</h1>
          )}

          <div className='user-avatar'>
            <img src='https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg' alt='User Avatar' onClick={() => setHandleAvatarImgPanel(!handleAvatarImgPanel)}></img>
            <div className='middle'>
              <span onClick={() => setHandleAvatarImgPanel(!handleAvatarImgPanel)}>Change Avatar</span>
            </div>
          </div>

          <div className='avatar-img-panel'>

            <button type='button' onClick={() => setHandleAvatarImgPanel(!handleAvatarImgPanel)}>
              Close Panel
            </button>

            <div className='imgs'>

              <div onClick={() => setNewAvatarImg}>
                <img src='https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg' alt='User Avatar'></img>
                <small>Name</small>
              </div>
              <div onClick={() => setNewAvatarImg}>
                <img src='https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg' alt='User Avatar'></img>
                <small>Name</small>
              </div>
              <div onClick={() => setNewAvatarImg}>
                <img src='https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg' alt='User Avatar'></img>
                <small>Name</small>
              </div>

            </div>

          </div>

          <form onSubmit={(e) => handleSubmit(e)}>

            <div>
              <label htmlFor='name'>Change Name</label>
              <input type='text' id='name' placeholder={`${userInfo.name}`} ref={nameRef}></input>
            </div>

            <div>
              <label htmlFor='email'>Change Email</label>
              <input type='email' id='email' placeholder={`${userInfo.email}`} ref={emailRef}></input>
            </div>

            <div>
              <label htmlFor='current-password'>Current Password <span>*</span></label>
              <input type='password' id='current-password' placeholder='********' ref={currentPasswordRef} required></input>
            </div>

            <div>
              <label htmlFor='new-password'>New Password</label>
              <input type='password' id='new-password' placeholder='********' ref={newPasswordRef}></input>
            </div>

            <div>
              <label htmlFor='confirm-new-password'>Confirm New Password</label>
              <input type='password' id='confirm-new-password' placeholder='********' ref={confirmNewPassowrdRef}></input>
            </div>

            <div>
              <button type='submit'>Submit Changes</button>
            </div>

          </form>

        </div>


        {/*TAB INDEX 1 */}
        <div className='user-info' id='index-1'>

          <h1>This is Your ID</h1>

          <div>
            <label htmlFor='user-id'>User ID</label>

            {handleChangeVisibility ? (
              <>
                <h2 id='user-id'>{userInfo.id}</h2>

                <button type='button' onClick={() => setHandleChangeVisibility(!handleChangeVisibility)}>Hide ID</button>
              </>
            ) : (
              <>
                <h2 id='user-id'>*****************</h2>
                <button type='button' onClick={() => setHandleChangeVisibility(!handleChangeVisibility)}>Show ID</button>
              </>
            )}

          </div>

        </div>


        {/*TAB INDEX 2 */}
        <div className='user-info' id='index-2'>

          <h1>Bookmark Data</h1>

          <h2>Erase <strong>all data</strong> you have save until now on this account?</h2>

          <button type='button' onClick={() => handleEraseData()}>Yes, erase all Data!</button>

        </div>

      </div>

    </C.Container>
  )
}