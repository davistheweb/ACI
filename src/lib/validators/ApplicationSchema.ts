import { z } from "zod";

export const ApplicationSchema = z.object({
  fullname: z.string().nonempty("Fullname is required"),
  address: z.string().nonempty("Address is required"),
  churchNameAndAddress: z.string().nonempty("Church information is required"),
  title: z.string().nonempty("title is required"),
  optionalOtherAssociation: z.string().optional(),
  reasonsForApplication: z.string().nonempty("This field is  requried"),
  whenChurchStarted: z.string().nonempty("This field is required"),
  numberOfMembers: z.number({
    required_error: "Number of members is required",
    invalid_type_error: "opps this required field  should be a number",
  }),
  yourMentor: z.string().nonempty("This field is required"),
  monthlyOrYearlyCollections: z.string().optional(),
  qualification: z.string().nonempty("This field is required"),
  institution: z.string().optional(),
  regularActivities: z.string().nonempty("This field is required"),
  communityProjects: z.string().nonempty("This field is required"),
});

export type ApplicationFormSchemaValues = z.infer<typeof ApplicationSchema>;
