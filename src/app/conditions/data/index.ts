import eczema from "./eczema";
import pcos from "./pcos";
import hairFall from "./hair-fall";
import sinusAllergy from "./chronic-sinus-allergy";
import migraine from "./migraine";
import childImmunity from "./child-immunity";

export const allConditions = [
  eczema,
  pcos,
  hairFall,
  sinusAllergy,
  migraine,
  childImmunity,
];

export function getConditionBySlug(slug: string) {
  return allConditions.find((c) => c.slug === slug);
}
