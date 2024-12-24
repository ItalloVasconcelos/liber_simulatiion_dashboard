import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { empresaSchema } from "../../../validationSchema.ts";
import { z } from "zod";

type EmpresaFormValues = z.infer<typeof empresaSchema>;

const EmpresaForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmpresaFormValues>({
        resolver: zodResolver(empresaSchema),
    });

    const onSubmit = (data: EmpresaFormValues) => {
        console.log("Dados validados:", data);
        // Substituir pela requisição ao json-server
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome para Contato:</label>
            <input {...register("contactName")} />
            {errors.contactName && <span>{errors.contactName.message}</span>}

            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <label>CNPJ:</label>
            <input {...register("cnpj")} />
            {errors.cnpj && <span>{errors.cnpj.message}</span>}

            <label>Razão Social:</label>
            <input {...register("corporateName")} />
            {errors.corporateName && <span>{errors.corporateName.message}</span>}

            <label>Nome Fantasia:</label>
            <input {...register("companyName")} />
            {errors.companyName && <span>{errors.companyName.message}</span>}

            <label>Celular:</label>
            <input {...register("phone")} />
            {errors.phone && <span>{errors.phone.message}</span>}

            <label>Senha:</label>
            <input type="password" {...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}

            <label>Confirmar Senha:</label>
            <input type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default EmpresaForm;
