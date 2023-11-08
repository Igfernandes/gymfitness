import { yupOptions } from "../../../config/yup";
import { BAD_REQUEST, INTERNAL_ERROR, OK } from "../../../constants/status";
import { postUsersSchema } from "./dto";
import { PostUsersUseCase } from "./useCase";

export function PostUsersController() {
  this.handle = async (request, response) => {
    try {
      const postUsecase = new PostUsersUseCase();

      const { body, query, params } = request;
      const payload = {
        ...query,
        ...body,
        ...params,
      };
      delete params[0];

      await postUsersSchema.validate(payload, yupOptions);

      const resp = await postUsecase.execute(payload);

      return response.status(OK).json(resp);
    } catch (yupErrors) {
      const err = {
        message: yupErrors.errors ? yupErrors.errors : String(yupErrors),
        code: yupErrors.errors ? BAD_REQUEST : yupErrors.code,
      };

      console.log(yupErrors);
      return response.status(err.code ?? INTERNAL_ERROR).json({
        errors: err.message,
      });
    }
  };
}
