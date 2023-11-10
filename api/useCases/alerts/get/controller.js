import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../../../constants/status";
import { GetAlertsUseCase } from "./useCase";

export function GetAlertsController() {
  this.handle = async (request, response) => {
    try {
      const getUsecase = new GetAlertsUseCase();

      const resp = await getUsecase.execute();

      return response.status(OK).json(resp);
    } catch (yupErrors) {
      const err = {
        message: yupErrors.errors ? yupErrors.errors : String(yupErrors),
        code: yupErrors.errors ? BAD_REQUEST : yupErrors.code,
      };

      console.log(err);
      return response.status(err.code ?? INTERNAL_ERROR).json({
        errors: err.message,
      });
    }
  };
}
