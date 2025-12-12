import { getErrorMessage } from "@/utils/Errors";
import { valorantFetch } from "@/utils/valorantService";

const allowedEndpoints = new Set([
	"agents",
	"weapons",
	"maps",
	"bundles",
	"seasons",
	"competitivetiers",
]);

interface RouteParams {
	params: {
		endpoint: string;
	};
}

export async function GET(
	_: Request, 
	{ params }: RouteParams): Promise<Response> {
	const { endpoint } = await params;

	if (!allowedEndpoints.has(endpoint)) {
		return Response.json(
			{ error: "Endpoint inválido ou não permitido." },
			{ status: 400 },
		);
	}

	try {
		const data = await valorantFetch(endpoint, 3600);

		return Response.json(data, {
			status: 200,
			headers: {
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (err) {
		return Response.json(
			{ error: getErrorMessage(err) },
			{ status: 500 }
		);
	}
}
