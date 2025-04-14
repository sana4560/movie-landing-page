"use client";
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  const theme = useTheme();
  
  return (
    <Box 
      className={className}
      sx={{ 
        mb: 4,
        textAlign: align,
        maxWidth: '800px',
        mx: 'auto'
      }}
    >
      <Typography 
        variant="h2" 
        component="h2" 
        sx={{ 
          color: theme.palette.heading?.primary || theme.palette.primary.main,
          fontWeight: 'bold',
          mb: subtitle ? 1 : 0
        }}
      >
        {title}
      </Typography>
      
      {subtitle && (
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            fontSize: '1.1rem',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
} 