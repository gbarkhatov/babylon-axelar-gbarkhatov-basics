const Stats = ({ title, value, description }) => (
  <div className='tooltip w-full' data-tip={`${description} info`}>
    <div className='stats shadow flex flex-1'>
      <div className='stat'>
        {title && <div className='stat-title'>{title}</div>}
        {value && <div className='stat-value'>{value}</div>}
        {description && <div className='stat-desc'>{description}</div>}
      </div>
    </div>
  </div>
)

export default Stats
