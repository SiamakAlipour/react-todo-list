import React, { useState } from 'react'
import './Header.scss'
import { SearchOutlined } from '@material-ui/icons'
import SignInUp from './login/SignInUp'
function Header({ parentCallback }) {
	const [signInUp, setSignInUp] = useState(false)

	const handleSearch = (e) => {
		parentCallback(e.target.value)
		// it will send to App js every time that search input value changes
	}

	const openSign = () => {
		setSignInUp(true)
	}
	const closeSign = () => {
		setSignInUp(false)
	}

	return (
		<div className='Header'>
			<div className='Header__right'>
				<ul>
					<li>صفحه اصلی</li>

					<li onClick={() => openSign()}>ورود</li>
					<SignInUp visiblity={signInUp} close={closeSign} />
				</ul>
			</div>
			<div className='Header__left'>
				{/* logo */}

				<div className='Header__left--searchBox'>
					<SearchOutlined />

					<input
						type='text'
						placeholder='Search'
						onChange={handleSearch}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
