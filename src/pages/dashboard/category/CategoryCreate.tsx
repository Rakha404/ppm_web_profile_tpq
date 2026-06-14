import { useForm } from "react-hook-form";
import { InputText } from "../../../components/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../components/Button";

type FormData = {
    Category: string;
};

const schema = z.object({
    Category: z.string().min(1, "Category harus diisi")
})

export default function CategoryCreate() {
    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm<FormData>({
            resolver: zodResolver(schema)
        });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div>
            <h1 className="text-6xl mb-5 font-semibold">Category Create</h1>
            <p>Selamat datang di halaman Category Create</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label=""
                    nama="Category"
                    register={register}
                    error={errors.Category?.message}
                />
            <Button
                label="Create"
                variant="primary"
                type="submit"
                className="mt-4"
            />
            </form>
        </div>
    )
}