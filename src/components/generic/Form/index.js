import { useForm } from 'react-hook-form'
import { FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash';
import FormTemplate from 'components/templates/FormTemplate';
import style from './style.module.css'
import { forwardRef, useImperativeHandle } from 'react';
import { DevTool } from "@hookform/devtools";
import ENV_CONFIG from 'constants/ENV_CONFIG';
const Form = forwardRef(function Form({ children, onSubmit, schema, defaultValues, config, template: Template = FormTemplate, templateProps = {}, ...props }, ref) {
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


    useImperativeHandle(ref, () => ({ ...methods, submit: methods.handleSubmit(onSubmit) }), [methods, onSubmit]);

    return (
        <>
            {ENV_CONFIG.NEXT_PUBLIC_HOOK_FORM_DEVTOOLS === 'true' && <DevTool control={methods.control} />}
            <FormProvider {...methods} >
                <form className={style.Form} onSubmit={onSubmit && methods.handleSubmit(onSubmit)} {...props} noValidate>
                    <Template {...templateProps}>
                        {children}
                    </Template>
                </form>
            </FormProvider>
        </>


    )
})
export default Form