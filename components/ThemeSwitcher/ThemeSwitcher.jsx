import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeSwitcher = () => {
  useEffect(() => {
    themeChange(false)
    // false parameter is required for react project
  }, [])

  return (
    <div>
      <select
        className='select max-w-xs gradientselect text-base'
        data-choose-theme
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  )
}

export default ThemeSwitcher
