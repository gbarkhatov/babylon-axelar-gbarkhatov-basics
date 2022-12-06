import { AiOutlineCheckCircle } from 'react-icons/ai'

const Transactions = ({ data }) => (
  <div className='overflow-x-auto'>
    <table className='table w-full'>
      <thead>
        <tr>
          <th>TX Hash</th>
          <th>Type</th>
          <th>Status</th>
          <th>Sender</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, hash, type, status, sender }) => (
          <tr key={id}>
            <td>{hash}</td>
            <td>{type}</td>
            {/* can check the logic here, if success = confirm, if not - warning/error */}
            <td className='text-accent'>
              <div className='flex gap-1 items-center'>
                <AiOutlineCheckCircle />
                <span>{status}</span>
              </div>
            </td>
            <td>
              <div className='flex flex-col'>
                <p>{sender.name}</p>
                <p className='text-gray-400'>{sender.address}</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Transactions
