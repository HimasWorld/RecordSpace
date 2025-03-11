import Link from 'next/link'

/**
 * 联盟行销
 * @returns
 */
export default function DashboardItemAffliate() {
  const cards = [
    {
      title: '$0.00',
      desc: 'Accumulated commission',
      className: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      title: '$0.00',
      desc: 'Withdrawn',
      className: 'bg-cyan-600 hover:bg-cyan-700 text-white'
    },
    {
      title: '$0.00',
      desc: 'Withdrawing',
      className: 'bg-pink-600 hover:bg-pink-700 text-white'
    },
    {
      title: '$0.00',
      desc: 'Cash withdrawal available',
      className: 'bg-emerald-600 hover:bg-emerald-700 text-white'
    }
  ]

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 border'>
      <div className='grid grid-cols-4 gap-4'>
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`block max-w-sm p-6 text-center border cursor-pointer rounded-lg shadow ${card.className}`}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight'>
              {card.title}
            </h5>
            <p className='font-normal'>{card.desc}</p>
          </div>
        ))}
      </div>
      <form className='mt-6'>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label
              for='last_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Total number of promotions
            </label>
            <input
              disabled
              type='text'
              id='last_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='123'
              required
            />
          </div>
          <div>
            <label
              for='company'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Affiliate Links
            </label>
            <input
              disabled
              type='text'
              id='company'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='https://www.recordspace.icu'
              required
            />
          </div>

          <div>
            <label
              for='website'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Promotion commission
            </label>
            <input
              disabled
              type='url'
              id='website'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='5%'
              required
            />
          </div>
        </div>

        <hr className='my-6' />

        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label
              for='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Withdrawal Account
            </label>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='John'
              required
            />
          </div>

          <div>
            <label
              for='visitors'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Withdrawal amount
            </label>
            <input
              type='number'
              id='visitors'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
        </div>

        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              required
            />
          </div>
          <label
            for='remember'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            I have read and agreed{' '}
            <Link
              href='/terms-of-use'
              className='text-blue-600 hover:underline dark:text-blue-500'>
              Service Agreement
            </Link>
            .
          </label>
        </div>
        <div className='flex gap-x-2'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Withdraw RMB
          </button>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Withdraw to balance
          </button>
        </div>

        <ul className='text-gray-600 list-disc pl-6'>
          <li>Promotion Description:</li>
          <li className='font-bold'>This is just a demo page, no real functionality exists!</li>
          <li>
          If you need to withdraw cash, please contact the website administrator and send your account information and payment code for manual withdrawal.
          </li>
          <li>
          If the user purchases resources or opens a membership through your promotion link, your commission will be awarded according to the promotion commission ratio.
          </li>
          <li>
          If the user is a newly registered user through your link, and you are the referrer, you will get commissions when the user purchases assets
          </li>
          <li>
          If the user is your subordinate and uses another referral link to purchase, the relationship between you and your subordinate will prevail and priority will be given to the registered referral rather than the referral link.
          </li>
          <li>The promotion reward amount is rounded to one decimal place. Reward amounts such as 0.1 are not calculated.</li>
          <li>
          The promotion order details cannot be viewed at the front desk. If you need to view the details, you can contact the administrator to take a screenshot to view the detailed records and time.
          </li>
        </ul>
      </form>
    </div>
  )
}
