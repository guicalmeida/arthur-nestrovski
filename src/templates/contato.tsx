/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Button, Container, TextField } from "@mui/material";
import NavDrawer from "components/navDrawer";
import NavHeader from "components/navHeader";
import type { FormEvent } from "react";

export default function ContatoPage() {
	const bc = {
		Contato: "contato",
	};

	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		try {
			await fetch("/__forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData as any).toString(),
			});

			// Reset form after successful submission
			event.currentTarget.reset();
			alert("Mensagem enviada com sucesso!");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("Erro ao enviar mensagem. Por favor, tente novamente.");
		}
	};

	return (
		<>
			<NavDrawer />
			<NavHeader breadcrumbs={bc}>CONTATO</NavHeader>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					mt: 5,
				}}
			>
				<Box sx={{ width: "100%", maxWidth: "600px" }}>
					<form
						style={{ display: "flex", flexDirection: "column" }}
						name="contato2"
						onSubmit={handleFormSubmit}
					>
						<input type="hidden" name="form-name" value="contato2" />
						<TextField required name="nome" label="Nome" variant="filled" />
						<TextField required name="email" label="E-mail" variant="filled" />
						<TextField
							required
							name="assunto"
							label="Assunto"
							variant="filled"
						/>
						<TextField
							required
							name="mensagem"
							label="Mensagem"
							variant="filled"
							multiline
							minRows={6}
						/>
						<Button variant="contained" type="submit">
							Enviar
						</Button>
					</form>
				</Box>
			</Container>
		</>
	);
}
