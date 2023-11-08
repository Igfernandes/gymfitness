import { yupOptions } from "../../../config/yup";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../../../constants/status";
import { getUsersSchema } from "./dto";
import { GetUsersUseCase } from "./useCase";

export function GetUsersController() {
  this.handle = async (request, response) => {
    try {
      const getUsecase = new GetUsersUseCase();

      const { body, query, params } = request;
      const payload = {
        ...query,
        ...body,
        ...params,
      };
      delete params[0];

      await getUsersSchema.validate(payload, yupOptions);

      const resp = await getUsecase.execute(payload);
  
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
