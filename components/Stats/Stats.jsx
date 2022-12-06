const Stats = ({ title, value, description }) => (
  <div className='tooltip w-full' data-tip={`${description} info`}>
    <div className='stats shadow flex flex-1'>
      <div className='stat'>
        {title && <div className='stat-title'>{title}</div>}
        {value && <div className='stat-value text-2xl text-left'>{value}</div>}
        {description && (
          <div className='stat-desc text-left'>{description}</div>
        )}
      </div>
    </div>
  </div>
)

export default Stats
