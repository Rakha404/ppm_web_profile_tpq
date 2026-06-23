import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

type FormData = {
    NamaEvent: string;
    Tag_line: string;
};

const schema = z.object({
    NamaEvent: z.string().min(1, "Nama Event harus diisi"),
    Tag_line: z.string().min(1, "Tag line harus diisi")
})

export default function EventCreate() {
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
            <h1 className="text-6xl mb-5 font-semibold">Event Create</h1>
            <p>Selamat datang di halaman Event Create</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Nama Event"
                    nama="NamaEvent"
                    register={register}
                    error={errors.NamaEvent?.message}
                />
                <InputText
                    label="Tag Line"
                    nama="Tag_line"
                    register={register}
                    error={errors.Tag_line?.message}
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
