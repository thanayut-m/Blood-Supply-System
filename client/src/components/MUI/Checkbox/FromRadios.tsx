import Radio from '@mui/material/Radio';

export const FromRadios = () => {
    return (
        <div className="bg-[#2D63EA] text-center text-white p-3 rounded-lg w-28 flex flex-col justify-between items-center h-25 shadow-md cursor-pointer">
            <div>
                <label className="text-lg font-bold">ปกติ</label>
                <p className="text-[1rem]">(Normal)</p>
            </div>
            <Radio
                sx={{
                    color: 'white',
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }}
            />
        </div>
    );
};
