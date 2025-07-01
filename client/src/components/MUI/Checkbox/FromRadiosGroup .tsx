import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const options = [
    { label: 'ปกติ', subLabel: '(Normal)', value: 'normal' },
    { label: 'ผิดปกติ', subLabel: '(Abnormal)', value: 'abnormal' },
    { label: 'ไม่ตรวจ', subLabel: '(Not Checked)', value: 'not_checked' },
];

export const FromRadiosGroup = () => {
    return (
        <div className="bg-white p-4">
            <RadioGroup row name="status" className="flex flex-row gap-3">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="bg-[#2D63EA] text-center text-white p-3 rounded-lg w-28 flex flex-col justify-between items-center shadow-md cursor-pointer transition duration-150 hover:scale-105"
                    >
                        <div>
                            <p className="text-lg font-bold">{option.label}</p>
                            <p className="text-[1rem]">{option.subLabel}</p>
                        </div>
                        <Radio
                            value={option.value}
                            sx={{
                                color: 'white',
                                '&.Mui-checked': {
                                    color: 'black',
                                },
                            }}
                        />
                    </label>
                ))}
            </RadioGroup>
        </div>
    );
};
