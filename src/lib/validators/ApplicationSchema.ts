import { z } from "zod";

export const ApplicationSchema = z.object({
  fullname: z.string().nonempty("Fullname is required"),
  address: z.string().nonempty("Address is required"),
  churchNameAndAddress: z.string().nonempty("Church information is required"),
  title: z.string().nonempty("title is required"),
  optionalOtherAssociation: z.string().optional(),
  reasonsForApplication: z.string().nonempty("This field is  requried"),
});

export type ApplicationFormSchemaValues = z.infer<typeof ApplicationSchema>;
