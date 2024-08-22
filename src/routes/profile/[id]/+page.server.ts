import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */ export async function load({
  params,
}) {
  if (params.id) {
    return {
      id: params.id,
    };
  }
  error(404, "Not found");
}
