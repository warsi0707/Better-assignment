import React from 'react'

export default function AboutUs() {
  return (
    <>
    <div className='h-full lg:p-40 lg:not-only-of-type:px-52'>
      <div className='min-h-screen w-full flex gap-10 flex-col justify-center items-center pb-20'>
        <h1 className='text-3xl text-green-800 font-bold'>Our mission</h1>
        <p className='text-4xl text-center font-bold lg:px-32'>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</p>
      </div>
      <div className='flex flex-col-reverse justify-center items-center text-center lg:flex-row  md:justify-between w-full p-10 gap-10'>
        <div className='w-full px-20 space-y-10'>
            <h1 className='text-3xl font-semibold'>The status quo is broken</h1>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio repudiandae perspiciatis voluptatum quos minima rem, corrupti explicabo nulla officiis quis quas, optio totam commodi? Id laudantium aspernatur autem doloremque itaque? Eos cumque dolores, molestiae dolorem suscipit voluptate amet modi!</p>
            <button className='bg-green-800 p-5 px-10 text-white rounded-2xl cursor-pointer'>Read Vishal's story</button>
        </div>
        <div className='w-full items-center flex justify-center'>
            <img className='w-96 md:w-full h-96' src="https://images.unsplash.com/photo-1756747840159-f81cc8607ece?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
    <div className='bg-green-800 md:h-96 w-full p-14 md:px-40 flex flex-col justify-center gap-5 text-white'>
      <h1 className='text-4xl'>How we're changing things</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, provident nobis deleniti perferendis, illo delectus neque laborum molestiae harum ratione vero consectetur suscipit laboriosam. Vel molestias dolorem placeat laborum officia consequuntur repellendus culpa provident earum nemo magnam modi, ipsum quibusdam.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, provident nobis deleniti perferendis, illo delectus neque laborum molestiae harum ratione vero consectetur suscipit laboriosam. Vel molestias dolorem placeat laborum officia consequuntur repellendus culpa provident earum nemo magnam modi, ipsum quibusdam.</p>
    </div>
    </>
  )
}
