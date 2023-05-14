import { useForm } from 'react-hook-form'
import { FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash';
import FormTemplate from 'components/templates/FormTemplate';
import style from './style.module.css'
import { useImperativeHandle } from 'react';

function Form({ children, onSubmit, schema, defaultValues, config, template: Template = FormTemplate, templateProps = {}, innerRef, ...props }) {
    const methods = useForm({
        resolver: !!schema ? yupResolver(schema) : undefined,
        defaultValues,
        mode: _.get(config, 'mode', 'onSubmit'),
        criteriaMode: _.get(config, 'criteriaMode', 'firstErrorDetected'),
        reValidateMode: _.get(config, 'reValidateMode', 'onChange'),
        shouldUnregister: _.get(config, 'shouldUnregister', true),
        shouldFocusError: _.get(config, 'shouldFocusError', true),
        context: _.get(config, 'context', {}),
        ..._.get(config, 'options', {})
    });


    useImperativeHandle(innerRef, () => ({ ...methods, submit: methods.handleSubmit(onSubmit) }), [methods, onSubmit]);

    return (
        <FormProvider {...methods} >
            <form className={style.Form} onSubmit={onSubmit && methods.handleSubmit(onSubmit)} {...props} noValidate>
                <Template {...templateProps}>
                    {children}
                </Template>
            </form>
        </FormProvider>

    )
}
export default Form