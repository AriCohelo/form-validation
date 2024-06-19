import { useForm } from 'react-hook-form';
import './youtubeForm.scss';
import { DevTool } from '@hookform/devtools';

type FormValues = {
  userName: string;
  email: string;
  channel: string;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="container">
      <form
        className="youtubeForm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          {...register('userName', { required: 'User name is required' })}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register('email', {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Ivalid email format',
            },
          })}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register('channel', { required: 'Channel is required' })}
        />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
