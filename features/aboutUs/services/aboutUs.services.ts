import { strapiAxios } from "@/lib/axios";
import {
  IAboutUsCertification,
  IAboutUsCertificationResponse,
  IAboutUsExperience,
  IAboutUsExperienceResponse,
} from "../interfaces/aboutUs.interfaces";

const populateParams = {
  populate: "*",
  "pagination[pageSize]": 100,
};

export const getAboutUsExperience = async (): Promise<IAboutUsExperience[]> => {
  const { data } = await strapiAxios.get<IAboutUsExperienceResponse>(
    "/api/experiences",
    {
      params: populateParams,
    }
  );
  return data.data;
};

export const getAboutUsCertification = async (): Promise<
  IAboutUsCertification[]
> => {
  const { data } = await strapiAxios.get<IAboutUsCertificationResponse>(
    "/api/certifications",
    {
      params: populateParams,
    }
  );
  return data.data;
};