import { yupOptions } from "../../../config/yup";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../../../constants/status";
import { deleteUsersSchema } from "./dto";
import { DeleteUsersUseCase } from "./useCase";

export function DeleteUsersController() {
  this.handle = async (request, response) => {
    try {
      const deleteUsecase = new DeleteUsersUseCase();

      const { body, query, params } = request;
      const payload = {
        ...query,
        ...body,
        ...params,
      };
      delete params[0];

      await deleteUsersSchema.validate(payload, yupOptions);

      const resp = await deleteUsecase.execute(payload);
  
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
