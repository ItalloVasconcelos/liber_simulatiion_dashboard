import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pessoaFisicaSchema } from "../../../validationSchema.ts";
import { z } from "zod";

type PessoaFisicaFormValues = z.infer<typeof pessoaFisicaSchema>;

const PessoaFisicaForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PessoaFisicaFormValues>({
        resolver: zodResolver(pessoaFisicaSchema),
    });

    const onSubmit = (data: PessoaFisicaFormValues) => {
        console.log("Dados validados:", data);
        // Substituir pela requisição ao json-server
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome Completo:</label>
            <input {...register("fullName")} />
            {errors.fullName && <span>{errors.fullName.message}</span>}

            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <label>CPF:</label>
            <input {...register("cpf")} />
            {errors.cpf && <span>{errors.cpf.message}</span>}


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

export default PessoaFisicaForm;
