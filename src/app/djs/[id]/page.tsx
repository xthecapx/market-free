'use client';

import { useParams } from 'next/navigation'
import dayjs, { Dayjs } from 'dayjs';
import Image from "next/image";
import Link from "next/link";
import blogData from "@/components/Blog/blogData";
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Review } from '@/components/Review';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const SingleBlog = () => {
  const params = useParams();
  const { id } = params;
  const blog = blogData[id as string];
  const { title, image, paragraph, author, tags, publishDate, rating, bookings, price, availableDates } = blog;
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(availableDates[0]));

  const isValid = (date: Dayjs) => {
    const isAvailable = availableDates.some(available => {
      const compare = dayjs(available);

      return date.isSame(compare)
    })

    return !isAvailable
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/djs/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/djs/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center mb-10">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className='inline-block'>
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Actualización
                </h4>
                <p className="text-xs text-body-color">{publishDate}</p>
              </div>
            </div>
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className='inline-block'>
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Calificación
                </h4>
                <p className="text-xs text-body-color">{rating}</p>
              </div>
            </div>
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className='inline-block'>
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  No. reservas
                </h4>
                <p className="text-xs text-body-color">{bookings}</p>
              </div>
            </div>
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className='inline-block'>
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Precios
                </h4>
                <p className="text-xs text-body-color">{price}</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8'>
            <div className='gap-1'>
              <div className='grid grid-flow-row gap-3 w-full'>
                <h2 className='mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'>Disponibilidad</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DateCalendar shouldDisableDate={isValid} value={value} onChange={(newValue) => setValue(newValue)} />
                </LocalizationProvider>
                <Link href={`/thank-you?date=${value.format('DD/MM/YYYY')}`} passHref>
                  <Button variant="outlined" startIcon={<BookIcon />}>
                    Contratar
                  </Button>
                </Link>
              </div>
            </div>
            <div className='grid grid-flow-row gap-3 w-full col-span-2'>
              <h2 className='mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'>Recomendaciones</h2>
              <Review />
              <Review />
              <Review />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SingleBlog;
