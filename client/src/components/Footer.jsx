import React from 'react';
import Layout from './Layout';


export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='p-32 py-8 flex items-center justify-between flex-col'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className='flex items-center py-2'>
          Build With <span className='text-primary text-2xl px-1'>&#9825;</span> By&nbsp;
          <a href="/" target='_blank' rel="noopener noreferrer" className='underline underline-offset-2'>Bgryt Academy</a>
        </div>
        <a href="/" target='_blank' rel="noopener noreferrer" className='underline underline-offset-2'>Join Now</a>
      </Layout>
    </footer>
  );
}


