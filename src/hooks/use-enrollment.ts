import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

export const enrollmentSchema = z.object({
  name: z.string().min(3, "El nombre completo es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(7, "Número de teléfono inválido"),
  programId: z.string().min(1, "Debes seleccionar un programa"),
  message: z.string().optional(),
});

export type EnrollmentInput = z.infer<typeof enrollmentSchema>;

export function useSubmitEnrollment() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: EnrollmentInput) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formulario enviado:", data);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "¡Inscripción enviada exitosamente!",
        description: "Un asesor se comunicará contigo pronto.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente más tarde.",
        variant: "destructive",
      });
    },
  });
}
