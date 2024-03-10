import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const Review = () => {
    return <div className="flex flex-col gap-4 bg-gray-700 p-4">
    <div className="flex justify justify-between">
        <div className="flex gap-2">
            <div className="w-7 h-7 text-center rounded-full bg-red-500">J</div>
            <span>Jess Hopkins</span>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
        </Stack>
        </div>
    </div>

    <div>
        Me gusto mucho la presentación, recomendado
    </div>

    <div className="flex justify-between">
        <span>Feb 13, 2021</span>
        <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
            Share</button>
    </div>
</div>
}