import { error } from "@sveltejs/kit";
import {
  kindeAuthClient,
  type SessionManager,
} from "@kinde-oss/kinde-auth-sveltekit";
/** @type {import('./$types').PageServerLoad} */ export async function load({
  params,
  request,
}) {
  try {
    let name = (
      await kindeAuthClient.getUser(request as unknown as SessionManager)
    ).given_name;
    const isAuth = await kindeAuthClient.isAuthenticated(
      request as unknown as SessionManager
    );
    if (isAuth) {
      return {
        id: params.id,
        name,
      };
    }
  } catch (err) {
    error(404, "Not found");
  }
}
