import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

type FormData = {
    Pembicara: string;
    Role: string;
};

const schema = z.object({
    Pembicara: z.string().min(1, "Pembicara harus diisi"),
    Role: z.string().min(1, "Role harus diisi")
})

export default function PembicaraCreate() {
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
            <h1 className="text-6xl mb-5 font-semibold">Pembicara Create</h1>
            <p>Selamat datang di halaman Pembicara Create</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label=""
                    nama="Pembicara"
                    register={register}
                    error={errors.Pembicara?.message}
                />
                <InputText
                    label=""
                    nama="Role"
                    register={register}
                    error={errors.Role?.message}
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
